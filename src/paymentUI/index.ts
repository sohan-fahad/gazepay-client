import { Base } from "../base";

export class PaymentUI extends Base {
    openGateway(id: string, url: string) {
        const parentDom = document.getElementById(id);
        if (!parentDom) return;
        const iframeElem = document.createElement("iframe");
        iframeElem.src = url;
        iframeElem.onload = () => {
            window.addEventListener("message", this.handleMessage);
        };
        parentDom.appendChild(iframeElem)
    }

    private handleMessage(event: MessageEvent) {
        console.log("Received message:", event.data);
        window.removeEventListener("message", this.handleMessage);
    }
}
