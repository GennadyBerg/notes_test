SearchBox = () => {
    let {text, setText} = useText();
    return <>
        <ListItems>
            <Search.Provider value={text}>
                <DataProvider></DataProvider>
            </Search.Provider>
        </ListItems>
        <div>
            <Input onchange={setText(value)}/>
        </div>
    </>
}