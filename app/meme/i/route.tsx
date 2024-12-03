import { ImageResponse } from 'next/og';


export const runtime = 'edge';

export async function GET(request : Request){
    const {searchParams} = new URL(request.url);

    const hasText = searchParams.has('text');
    const text = hasText ? searchParams.get('text')?.slice(0, 100): '';
    const blue = "blue"
    const imageData = await fetch(
    new URL( './drake.jpg' , import.meta.url)
    ).then((res) => res.arrayBuffer());
    
    const fontData= await fetch(
    new URL('./Oswald-VariableFont_wght.ttf', import.meta.url)
    ).then((res)=> res.arrayBuffer());

    return new ImageResponse(
        (
            <div
                style={{
                    display:'flex',
                    width:'100%',
                    height: '100%',
                    flexDirection: 'column',
                    justifyContent: 'flex-end',
                    alignItems:'center',
                    position:'relative',
                    backgroundColor:'white',
                }}
            >
                {/*@ts-ignore*/}
                <img height='630' src={imageData}/>
                <div
                style={{
                    position: 'absolute',
                    margin:0,
                    top:100,
                    width:400,
                    right:150,
                    wordWrap:'break-word',
                    overflowWrap:'break-word',
                    color:'black',
                    lineHeight: 1,
                    fontSize:50,
                    fontFamily:"Oswald Bold",
                    textAlign: "center",
                    fontWeight:900,
                    textTransform:"capitalize",  
                }}
                >
                    you're good
                </div> 
                <div
                style={{
                    position: 'absolute',
                    margin:0,
                    bottom:150,
                    width:400,
                    right:150,
                    wordWrap:'break-word',
                    overflowWrap:'break-word',
                    color:'black',
                    lineHeight: 1,
                    fontSize:50,
                    fontFamily:"Oswald Bold",
                    textAlign: "center",
                    fontWeight:900,
                    textTransform:"capitalize",   
                }}
                >
                    you're based
                </div>
            </div>
        )
    )
}