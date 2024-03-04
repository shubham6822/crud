import user from "../model/user.model.js";

export const create = async (req, res) => {
    try {
        const userdata = new user(req.body);
        if (!userdata) {
            res.status(404).json({ message: "Invalid User Data" });
        }

        const savedata = await userdata.save();
        res.status(200).json(savedata);

    } catch (error) {
        res.status(500).json({ error: error })
    }
}

// get all users data
export const getall = async (req, res) => {
    try {
        const userdata = await user.find()
        if (!userdata) {
            return res.status(404).json({ msg: "user data not found" })
        }

        res.status(200).json(userdata)

    } catch (error) {
        res.status(500).json({ error: error })
    }
}

export const getone = async (req, res) => {
    try {
        const id = req.params.id;
        const userexist = await user.findById(id)
        if (!userexist) {
            return res.status(404).json({ msg: "user is not exist" })
        }

        res.status(200).json(userexist);

    } catch (error) {
        res.status(404).json({ error: error })
    }
}

export const update = async (req, res) => {
    try {
        const id = req.params.id;
        const userexist = await user.findById(id)
        if (!userexist) {
            return res.status(404).json({ msg: "user is not exist" })
        }

        const updateuser = await user.findByIdAndUpdate(id, req.body, { new: true })
        res.status(200).json(updateuser)

    } catch (error) {
        res.status(404).json({ error: error })
    }
}

export const deleteuser = async (req, res) => {
    try {
        const id = req.params.id;
        const userexist = await user.findById(id)
        if (!userexist) {
            return res.status(404).json({ msg: "user is not exist" })
        }

        await user.findByIdAndDelete(id)
        res.status(200).json({ msg: "user delete successfully" })

    } catch (error) {
        res.status(404).json({ error: error })
    }
}