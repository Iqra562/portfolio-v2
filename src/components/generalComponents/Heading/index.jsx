function Heading({preFix,  postFix}){
    return(
       <div className="flex   md:space-x-2">
                <p> <span  className="text-white uppercase text-3xl md:text-4xl font-semibold">{preFix} </span> <span className="text-secondary uppercase text-3xl md:text-4xl font-semibold">{postFix}</span> </p>

            </div>
    )
}

export {Heading}