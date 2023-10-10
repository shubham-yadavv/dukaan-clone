import BaseRoutes from "./base/BaseRouter";
import { authenticateJWT } from "../middleware/auth";
import storeController from "../controller/store.controller";
import productController from "../controller/product.controller";


class BuyerRoutes extends BaseRoutes{
    public routes(): void {
        this.router.get("/store/details", authenticateJWT, storeController.getStoreDetails)
        this.router.get("/products/catalog", authenticateJWT, productController.getProductCatalog)
        
        
        // Add Items to Cart
        this.router.get("/cart/add")
        
        
        // Place an Order
        this.router.get("/order/place")



      }
    
}
export default new BuyerRoutes().router