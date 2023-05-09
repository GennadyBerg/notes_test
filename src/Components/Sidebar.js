import { ListItemContext } from "../Contexts";
import { SearchBox, ListItem } from ".";

const Sidebar = () => {
    let listItemsData = <SearchBox />;

    /*return <>
        {
            listItemsData.forEach(listItemData => {
                <ListItemContext.Provider value={ {data: listItemData.ListItems}}>
                    <ListItem></ListItem>
                </ListItemContext.Provider>
                })
        }
    </>*/
    return listItemsData;
}
export { Sidebar }