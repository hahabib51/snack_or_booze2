import axios from "axios";
import { Snacks, Drinks } from "./App";

const BASE_API_URL = "http://localhost:5000";

/* 
  json-server will give you CRUD endpoints on snacks and drinks.
  Here we've provided you with a single action to get all drinks.

  You'll need to add to this class as you build features for the app.
*/

class SnackOrBoozeApi {
  static async getSnacks() {
    const result = await axios.get(`${BASE_API_URL}/snacks`);
    return result.data;
  }

  static async getDrinks() {
    const result = await axios.get(`${BASE_API_URL}/drinks`);
    return result.data;
  }

  static async addItem(itemObj: Snacks | Drinks, category: string) {
    await axios.post(`${BASE_API_URL}/${category}`, itemObj, {
      headers: { "Content-Type": "application/json" },
    });
  }
}

export default SnackOrBoozeApi;
