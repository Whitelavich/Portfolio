


export const getColorsFromSVG = (file: any)=>{
    let regex1 = new RegExp('fill=#([a-zA-Z0-9]{6})','g')
    let regex2 = new RegExp('"#([a-zA-Z0-9]{6})"','g')
    let colors = file.match(regex1)
    if(!colors){
        colors = file.match(regex2)
    }
    if(!colors){
        return
    }
        colors = colors.map((color: string)=>{
            if(color.startsWith('"')){
                return color.toLowerCase().replaceAll('"','')
            }else{
                return color.substring(5).toLowerCase().replaceAll('"','')
            }

        })

    console.log(colors)
        return colors[0] ?? '#ffffff'
}


