ListItem = () =>{
    return <>
        <CurrentItem.Consumer>
            {
                currItemContextValue =>
                    <ListItemContext.Consumer>
                        { 
                            value => <div onSelect={currItemContextValue.setSelectedItem(this)}><h1>value.data.title</h1></div>
                        }
                    </ListItemContext.Consumer>
            }
        </CurrentItem.Consumer>
    </>
}