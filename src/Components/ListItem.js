import { CurrentItemContext, ListItemContext } from "../Contexts"

const ListItem = () =>{
    return <>
        <CurrentItemContext.Consumer>
            {
                currItemContextValue =>
                    <ListItemContext.Consumer>
                        { 
                            value => <div onSelect={currItemContextValue.setSelectedItem(this)}><h1>value.data.title</h1></div>
                        }
                    </ListItemContext.Consumer>
            }
        </CurrentItemContext.Consumer>
    </>
}

export { ListItem }