const CategoryTile = ({ icon, category_name, active, on_Click }) => {

    const activeClass = 'flex-col flex justify-center items-start w-[12rem] h-[8rem] px-5 rounded-3xl text-gray-200 text-[#efdf4e] bg-[#fff4ae50] border-[#decc2a] border-[4px]';

    const non_ActiveClass = 'flex-col flex justify-center items-start border-[2px] w-[12rem] border-white/30 h-[8rem] px-5 rounded-3xl text-gray-200 hover:text-[#efdf4e] hover:bg-[#fff4ae50] hover:border-[#decc2a] hover:border-[4px]';

    return (
        <div className={active ? activeClass : non_ActiveClass} onClick={on_Click}>
            <div className='mb-3'>
                {icon}
            </div>
            <span className='capitalize text-xl'>{category_name}</span>
        </div>
    )
}

export default CategoryTile