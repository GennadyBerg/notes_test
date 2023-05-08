Sidebar = () => {
    let listItemsData = <SearchBox></SearchBox>;

    return <>
        {
            listItemsData.forEach(listItemData => {
                <ListItemContext.Provider value={ {data: listItemData.ListItems}}>
                    <ListItem></ListItem>
                </ListItemContext.Provider>
                })
        }
    </>
}