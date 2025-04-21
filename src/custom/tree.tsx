import * as React from "react"
import { graphql, useStaticQuery } from "gatsby"
import {useEffect} from "react";
import { Link } from "gatsby";

type FileStructureProps = {
    data: {
        allFile: {
            nodes: {
                id: string
                name: string
                relativePath: string
                extension: string
            }[]
        }
    }
}
const FilterPath = (input:string)=>{
    // 1. 확장자 제거 (.mdx 제거)
    const noExt = input.replace(/\.mdx$/, "");

    // 2. 슬래시로 경로 분리
    const parts = noExt.split("/");

    // 3. 마지막 두 조각 조합
    if (parts.length >= 2) {
        return `/${parts[parts.length - 2]}/${parts[parts.length - 1]}`;
    } else {
        return ""
    }
}
const FileStructure = ({ data }: FileStructureProps) => {
    const [openFolders, setOpenFolders] = React.useState<string[]>([])

    const allowedExtensions = ['mdx']

    // 모든 폴더 경로를 수집하는 함수
    const getAllFolderPaths = (nodes: any) => {
        const folderPaths = new Set<string>()

        nodes.forEach((node: any) => {
            const pathParts = node.relativePath.split('/')
            // 마지막은 파일명이라서 제외하고 경로만 모음(pathParts.length -1 )
            for (let i = 1; i < pathParts.length  ; i++) {
                folderPaths.add(pathParts.slice(0, i).join('/'))
            }
        })

        return Array.from(folderPaths)
    }

    // 컴포넌트 마운트 시 모든 폴더 열기
    useEffect(() => {
        setOpenFolders(getAllFolderPaths(data.allFile.nodes))
    }, [data])

    const renderTree = (nodes: any, parentPath: string = '', level: number = 1) => {
        const groupedByFolder: any = {}

        nodes.forEach((node: any) => {
            const pathParts = node.relativePath.split('/')
            const folderPath = pathParts.slice(0, level).join('/')

            if (!allowedExtensions.includes(node.extension)) return

            if (!groupedByFolder[folderPath]) {
                groupedByFolder[folderPath] = []
            }
            groupedByFolder[folderPath].push(node)
        })

        return Object.keys(groupedByFolder).map((folderPath) => {
            const files = groupedByFolder[folderPath]
            const isLastFile = files.length === 1 // 마지막 파일인지 체크
            const isFolderOpen = openFolders.includes(folderPath)

            // 레벨에 맞는 스타일 적용
            const folderStyle = {
                marginLeft: `${level * 20}px`, // 레벨에 따라 들여쓰기
                fontWeight: isLastFile ? 'normal' :'bold', // 레벨에 따른 폰트 스타일
               // color: isFolderOpen ? '#0077cc' : '#333' , // 레벨에 따른 색상
                cursor: isLastFile ? 'default' : 'pointer', // 마지막 파일일 경우 클릭 비활성화
            }
            const fileName=  folderPath.split('/').pop()
            return (
                <div key={folderPath}>
                    <p
                        style={folderStyle}
                         onClick={() => {
                             if (isLastFile) {
                                 return;
                             }
                            if (isFolderOpen) {
                                setOpenFolders(openFolders.filter(f => f !== folderPath))
                            } else {
                                setOpenFolders([...openFolders, folderPath])
                            }
                        }}
                    >
                        {!isLastFile && (isFolderOpen ? "▼ " : "▶︎ ")}
                        {
                            isLastFile ?
                                <Link to={FilterPath(folderPath)} style={{
                                    textDecorationLine : "none",
                                    textDecoration : "none",
                                    color:"black"
                                }}>
                                    {fileName.replace(/\.mdx$/, "")}
                                </Link> : fileName
                        }
                    </p>
                    {isFolderOpen && (
                        <div style={{ marginLeft: 40 }}>
                            {renderTree(files, folderPath, level + 1)}
                        </div>
                    )}
                </div>
            )
        })
    }

    return <div>{renderTree(data.allFile.nodes)}</div>
}

const Tree = () => {
    const data = useStaticQuery(graphql`
        query {
            allFile(filter: { sourceInstanceName: { eq: "content/posts" } }) {
                nodes {
                    id
                    name
                    relativePath
                    extension
                }
            }
        }
    `)

    return (
        <FileStructure data={data} />
    )
}

export default Tree
