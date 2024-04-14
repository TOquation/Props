import React from 'react'
const List = () => {
    const linked = [
        {
            id: 1,
            name: "Home",
            link: "oparajitee4@gmail.com",
            style: {fontSize: '18px'}
        },
        {
            id: 2,
            name: "About",
            link: "oparajitee4@gmail.com",
            style: {fontSize: '18px'}
        },
        {
            id: 3,
            name: "Services",
            link: "oparajitee4@gmail.com",
            style: {fontSize: '18px'}
        },
        {
            id: 4,
            name: "Contacts",
            link: "oparajitee4@gmail.com",
            style: {fontSize: '18px'}
        },
        {
            id: 5,
            name: "Substances",
            link: "oparajitee4@gmail.com",
            style: {fontSize: '20px',}
        },
    ]

    const sort = linked.filter(filt => filt.id < 5)

    const items = sort.map(item => 
                <a style={item.style} href={item.link} key={item.id}>{item.name}</a>
    )
  return (
    <div>
        <ul>
            <li>
                {items}
            </li>
            
        </ul>
    </div>
  )
}

export default List