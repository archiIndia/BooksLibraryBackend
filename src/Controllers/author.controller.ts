import { Request, Response } from "express";
import { IAuthor, AuthorModel } from "../models/Author.Model";

const createAuthor = async (req: Request, res: Response) => {
  try {
    const Requestbody = req.body;
    const Payload: IAuthor = {
      first_name: Requestbody.first_name,
      last_name: Requestbody.last_name,
      status: "A",
      email: Requestbody.email,
    };
    const newAuthor = await AuthorModel.create(Payload);
    res.status(201).send(newAuthor);
  } catch (error) {
    res.status(404).send(error);
  }
};
const getallAuthors = async (req: Request, res: Response) => {
  try {
    const allAuthors = await AuthorModel.find({ status: "A" });
    res.status(200).json(allAuthors);
  } catch (error) {
    res.status(404).json(error);
  }
};
const deleteAuthor= async (req: Request, res: Response) => {
  try {
    const {id} = req.params;
    const delMember = await AuthorModel.findOneAndUpdate(
      { _id: id, status: "A" },
      { status: "D" },
      { new: true }
    );
    res.status(201).send(delMember);
  } catch (error) {
    res.status(404).send(error);
  }
};

export { createAuthor, getallAuthors, deleteAuthor };
