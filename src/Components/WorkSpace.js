WorkSpace = () => {
    return <>
        <CurrentItem.Consumer>
            { value => <TextBox text={value.selectedItem} /> }
        </CurrentItem.Consumer>
    </>
}