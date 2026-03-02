const Button = (
    {text , cName="bg-green-500"} : {text?:string; cName?:string}) => {
    if(!text)
    {
        text = "Action Button";
    }
    return (        
        <button className={cName}>{text}</button>
    )
}

export default Button;