"use client"

export default function ProductImage(props: any) {
    // console.log("Props", props)
    return (
        <div>

            <div>
                {props.images && props.images.map((item: any) => {
                    return (
                        <img src={`http://127.0.0.1:3000/${item?.path}`} alt="" style={{ width: '150px', marginRight: '10px' }} key={item?.id} />
                    )
                })}

            </div>


        </div>
    )
}