import noteModel from "../models/noteModels.js";

const getAllNotes = async (req, res) => {
    try {
        const allDataNote = await noteModel.findAll();
        res.status(200).json({
            message: "Notes retrieved successfully",
            data: allDataNote,
        });        
    } catch (error) {
        res.status(500).json({
            message: "Error retrieved notes",
            error: error.message,
        });
    }
};

const createNote = async (req, res) => {
    console.log(req.body);
    const { title, userNote } = req.body;
  

  try {
    const newNote = await noteModel.create({ title, userNote });
    res.status(201).json({
      message: "Note created successfully",
      data: newNote,
    });
  } catch (error) {
    res.status(400).json({
      message: "Validation error",
      error: error.message,
    });
  }
};

const getNoteById = async (req, res) => {
    const { id } = req.params;

    try {
        const note = await noteModel.findById(id);
        if (!note) {
            return res.status(404).json({
                message: "Note not found",
            });
        }

        res.status(200).json({
            message: "Note retrieved successfully",
            data: note,
        });

    } catch (error) {
        res.status(500).json({
            message: "Error retrieved note"
        });
    }
};

const updateNote = async (req, res) => {
    const { id } = req.params;
    const { title, userNote } = req.body;

    try {
        const note = await noteModel.findById(id);

        if (!note) {
            return res.status(404).json({
                message: "Note not found",
            });
        }
        
        await noteModel.updateById(id, { title, userNote });
        const updatedNote = await noteModel.findById(id);

        res.status(200).json({
            message: "Note update successfully",
            data: updatedNote,
        });
    } catch (error) {
        res.status(500).json({
            message:"Error updating note",
            error: error.message,
        });
    }
};

const deleteNote = async (req, res) => {
  const { id } = req.params;

  try {

    const note = await noteModel.findById(id);
    if (!note) {
      return res.status(404).json({
        message: "Note not found",
      });
    }

    const deletedNote = await noteModel.deleteById(id);
    res.status(200).json({
      message: "Note deleted successfully",
      data: deletedNote,
    });
  } catch (error) {
    res.status(500).json({
      message: "Error deleting note",
      error: error.message,
    });
  }
};

export default {
    getAllNotes,
    createNote,
    getNoteById,
    updateNote,
    deleteNote,
};