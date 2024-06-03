import("./header.css")

export default function Header(){

    return <div className={"stock-component-header"}>
        <div className={"index-symbol-header"}>
            <div className={"index-header"}>Index</div>
            <div className={"symbol-header"}>Symbol</div>
        </div>
        <div className={"name-price-header"}>
            <div className={"name-header"}>Name</div>
            <div className={"price-header"}>Price</div>
        </div>
        <div className={"add-to-watchlist-header"}>Watchlist</div>
        <div>Expand</div>
    </div>
}
