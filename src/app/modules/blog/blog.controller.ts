// blog.controller.ts
import { Request, Response } from "express";
import catchAsync from "../../utils/tryCatch";
import sendResponse from "../../utils/sendResponse";
import { BlogService } from "./blog.service";

const createBlog = catchAsync(async (req: Request, res: Response) => {
    const blog = await BlogService.createBlog(req.body);

    sendResponse(res, {
        success: true,
        statusCode: 201,
        message: "Blog created successfully",
        data: blog,
    });
});

const updateBlog = catchAsync(async (req: Request, res: Response) => {
    const { id } = req.params;
    const updatedBlog = await BlogService.updateBlog(id, req.body);

    sendResponse(res, {
        success: true,
        statusCode: 200,
        message: "Blog updated successfully",
        data: updatedBlog,
    });
});


const deleteBlog = catchAsync(async (req: Request, res: Response) => {
    const { id } = req.params;
    const deletedBlog = await BlogService.deleteBlog(id);

    sendResponse(res, {
        success: true,
        statusCode: 200,
        message: "Blog deleted successfully",
        data: deletedBlog,
    });
});

export const BlogController = {
    createBlog,
    updateBlog,
    deleteBlog
};
