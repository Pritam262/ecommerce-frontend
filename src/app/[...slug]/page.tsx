
export default async function productPage({ params, searchParams }: {params:{slug:String} ; searchParams: { [key: string]: string | string[] | undefined } }){

    console.log(params.slug)
    console.log(searchParams.id);
    return(
        <div>
            Search slug: {params.slug}
            Search Query: {searchParams.id}
        </div>
    )
}