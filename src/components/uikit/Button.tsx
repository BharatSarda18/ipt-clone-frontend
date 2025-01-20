const Button = ({ onClick = () => { }, icon='', label="button", style = {}, type = "primary", addOnClass="", inBuiltIcon = false, disabled = false }) => {
    let className = "";
    if (type == "iconButton") {
        className = `flex h-full items-center bg-indigo-600 rounded border border-indigo-600 font-semibold text-sm text-white cursor-pointer px-2.5 py-1.5 hover:bg-indigo-500 hover:border-indigo-500 disabled:bg-indigo-600 disabled:border-indigo-600 disabled:cursor-not-allowed disabled:opacity-50 ${addOnClass}`
    } else if (type == "primary") {
        className = `min-w-[120px] font-semibold text-sm leading-5 text-white bg-indigo-600 rounded cursor-pointer border border-indigo-600 px-2.5 py-1.5 disabled:bg-indigo-300 disabled:border-indigo-300 disabled:cursor-not-allowed disabled:opacity-80 hover:bg-indigo-500 hover:border-indigo-500 ${addOnClass}`
    } else if (type == "outline") {
        className = 'min-w-[120px] font-semibold text-sm leading-5 text-indigo-600 bg-white rounded cursor-pointer border border-indigo-600 px-2.5 py-1.5 hover:bg-indigo-500 hover:border-indigo-500 hover:text-white'
    } else if (type == "fullwidthbutton") {
        className = 'font-semibold text-sm leading-5 w-full text-white bg-indigo-600 rounded cursor-pointer border border-indigo-600  py-1.5 disabled:bg-indigo-300 disabled:border-indigo-300 disabled:cursor-not-allowed disabled:opacity-80 hover:bg-indigo-500 hover:border-indigo-500'
    } else if (type == "iconButtonWithgreenbg") {
        className = 'flex h-full items-center bg-[#34b8a7] rounded border border-[#34b8a7] font-semibold text-sm text-white cursor-pointer px-3 py-3 hover:bg-[#248074] hover:border-[#248074] disabled:bg-indigo-600 disabled:border-indigo-600 disabled:cursor-not-allowed disabled:opacity-50'
    } else if (type == "outlineWithIcon") {
        className = 'flex h-full items-center bg-white rounded border border-indigo-600 font-semibold text-sm text-indigo-500 cursor-pointer px-2.5 py-1.5  disabled:bg-indigo-600 disabled:border-indigo-600 disabled:cursor-not-allowed disabled:opacity-50'
    } else if (type == "downloadButton") {
        className = "flex items-center bg-white border border-indigo-500 rounded text-indigo-500 cursor-pointer text-sm font-semibold leading-5 px-2 py-2"
    }
    return (
        <button disabled={disabled} style={style} className={className} onClick={onClick}>
            {icon &&
                <>{
                    inBuiltIcon ? icon :
                        <img src={icon} alt="icon" className='mr-1' />
                }</>
            }
            {label}
        </button>
    )
}

export default Button