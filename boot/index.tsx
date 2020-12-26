import stores from "../app/Redux/Store";
import app from "./setup.store";

export default function() {
	return app(stores);
}
