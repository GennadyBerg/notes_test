import { CurrentItemContext } from "../Contexts"

const Workspace = () => {
    return <>
        <CurrentItemContext.Consumer>
            { value => <div><p>{value.selectedItem}</p></div> }
        </CurrentItemContext.Consumer>
    </>
}
export { Workspace }