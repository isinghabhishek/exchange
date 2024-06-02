
class DepthManager {
private market: string;
constructor(market: string) {
    this.market = market;
    setInterval(() => {
        this.poolMarket();
    }, 3000)
} 
}