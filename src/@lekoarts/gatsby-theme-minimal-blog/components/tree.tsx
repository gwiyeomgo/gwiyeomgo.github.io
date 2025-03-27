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
const FileStructure = ({ data }: FileStructureProps) => {
    const [openFolders, setOpenFolders] = React.useState<string[]>([])

    const allowedExtensions = ['mdx']

    // 모든 폴더 경로를 수집하는 함수
    const getAllFolderPaths = (nodes: any) => {
        const folderPaths = new Set<string>()

        nodes.forEach((node: any) => {
            const pathParts = node.relativePath.split('/')
            for (let i = 1; i < pathParts.length; i++) {
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
                fontWeight: level === 1 ? 'bold' : 'normal' , // 레벨에 따른 폰트 스타일
                color: isFolderOpen ? '#0077cc' : '#333' , // 레벨에 따른 색상
                cursor: isLastFile ? 'default' : 'pointer', // 마지막 파일일 경우 클릭 비활성화
            }
            return (
                <div key={folderPath}>
                    <p
                        style={folderStyle}
                         onClick={() => {
                             if (isLastFile) {
                                 return;
                                /* if (isLastFile && files[0].extension === 'mdx') {
                                     console.log("MDX 파일 경로:", folderPath);
                                     navigate(`/details?path=${encodeURIComponent(folderPath)}`);
                                     return;
                                 }*/
                             }
                            if (isFolderOpen) {
                                setOpenFolders(openFolders.filter(f => f !== folderPath))
                            } else {
                                setOpenFolders([...openFolders, folderPath])
                            }
                        }}
                    >
                        {folderPath.split('/').pop()}

                    </p>
                    {isFolderOpen && (
                        <div style={{ marginLeft: 40 }}>
                            {files.map((file: any) => (
                                <div key={file.id} style={{ marginLeft: 20 }}>
                                    {file.extension === 'mds' ? (
                                        <Link to={`/details?path=${encodeURIComponent(file.relativePath)}`} style={{ color: "blue", textDecoration: "underline" }}>
                                            {file.name}
                                        </Link>
                                    ) : (
                                        <span>{file.name}</span>
                                    )}
                                </div>
                            ))}
                        </div>
                    )}
                  {/*  {isFolderOpen && (
                        <div style={{ marginLeft: 40 }}>
                            {renderTree(files, folderPath, level + 1)}
                        </div>
                    )}*/}
                </div>
            )
        })
    }

    return <div>{renderTree(data.allFile.nodes)}</div>
}

const Tree = ({to}) => {
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

    console.log("data",data)
    console.log("data",to)

    return (
        <div>
            <h1>"test</h1>
            <FileStructure data={data} />
        </div>
    )
}

export default Tree
