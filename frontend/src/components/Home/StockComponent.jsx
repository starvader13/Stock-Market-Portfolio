import("./home.css")

export default function StockComponent({ index, name, price, symbol }){

    return <div className={"stock-component"}>
        <div className={"index-symbol"}>
            <div className={"index"}>{index}.</div>
            <div className={"symbol"}>{symbol}</div>
        </div>
        <div className={"name"}>{name}</div>
        <div className={"price"}>{price}</div>
        <div className={"add-to-watchlist"}>Add To Watchlist</div>
    </div>
}
