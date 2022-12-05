import User from "../../models/user_model.js";

// Index page data
export const changeTheme = async (req, res) => {
    // return console.log(req.body)
    const user = await User.findById(req.body.user._id)
    user.extra_info.theme = req.body.theme
    await user.save()
};