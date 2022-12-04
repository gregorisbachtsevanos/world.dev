import User from "../../models/user_model.js";

// Index page data
export const changeTheme = async (req, res) => {
    console.log(req.body._id)
    const user = await User.findById(req.body._id)
    user.extra_info.theme = 'dark'
    await user.save()
};