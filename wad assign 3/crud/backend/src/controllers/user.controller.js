import { asyncHandler } from "../utils/asyncHandler.js";
import { ApiError } from "../utils/ApiError.js";
import { ApiResponse } from "../utils/ApiResponse.js";
import { User } from "../models/user.model.js";


const addUser = asyncHandler(async(req,res) => {

    const {name,email,age} = req.body;

    if(
        [name,email].some(
            (field) => field?.trim() === ""
        )
    ) {
        throw new ApiError(400,"All fields are compulsory ! ");
    }

    // add validations here


    const user = await User.create({
        name:name.toLowerCase(),
        email,
        age
    });

    return res.status(201)
    .json(
        new ApiResponse(200,user,"User added Successfully ! ")
    );


});

const updateUser = asyncHandler(async(req,res) => {

    const id = req.params.id;
    const {name,email,age} = req.body;

    if(
        [name,email].some(
            (field) => field?.trim() === ""
        )
    ) {
        throw new ApiError(400,"All fields are compulsory ! ");
    }


    const user = await User.findByIdAndUpdate(
        id,
        {
            $set: {
                name,
                email,
                age
            }
        },
        {
            new:true
        }
    );

    return res.status(200)
    .json(
        new ApiResponse(200,user,"User Account Details Updated Successfully !! ")
    );

    
});

const deleteUser = asyncHandler(async(req,res) => {

    const id = req.params.id;
    await User.findByIdAndDelete(id)
    .then(result => res.json(result))
    .catch(err => res.json(err))

});

const getallUser = asyncHandler(async(req,res) => {

    await User.find({})
    .then(users => res.json(users))
    .catch(err => res.json(err))

});

const getUser = asyncHandler(async(req,res) => {
    const id = req.params.id;
    const user = await User.findById(id)
    .catch(err => res.json(err))

    return res.status(200).json(user);
})

export {
    addUser,
    updateUser,
    deleteUser,
    getallUser,
    getUser
};