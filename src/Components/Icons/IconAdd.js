import { useContext } from "react";
import { AddItemContext } from "../../Contexts";

const IconAdd = () => {
    function useAddItemContext() {
        const context = useContext(AddItemContext);
        if (!context) {
            throw new Error('useMyContext must be used within a MyProvider');
        }
        return context;
    }
    let addCntx = useAddItemContext();
    return (
        <>
            <button onClick={
                event => (
                    <AddItemContext.Consumer>
                            {addCntx.addItemClick({ title: "", text: "" })}
                    </AddItemContext.Consumer>
                )
            }>Add</button>
        </>
    );
}
export { IconAdd };