// Controller for brand
export const store = async (req, res) => {
  try {
    let reqBody = req.body;
    await brandsModel.create(reqBody);

    return res.json({ message: "Item created successfully", reqBody });
  } catch (error) {
    return res.json({ error: error.message || "Internal Server Error" });
  }
};

export const show = async (req, res) => {
  try {
    // Your Code Here
    return res.json({ data: "Retrieve item logic goes here" });
  } catch (error) {
    return res.json({ error: error.message || "Internal Server Error" });
  }
};

export const update = async (req, res) => {
  try {
    // Your Code Here
    return res.json({ message: "Item updated successfully" });
  } catch (error) {
    return res.json({ error: error.message || "Internal Server Error" });
  }
};

export const destroy = async (req, res) => {
  try {
    // Your Code Here
    return res.json({ message: "Item deleted successfully" });
  } catch (error) {
    return res.json({ error: error.message || "Internal Server Error" });
  }
};
