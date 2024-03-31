import Story from "../models/Story.models.js";

export const upload = async (req, res) => {
  try {
    console.log("QQ");
    console.log(req.body);
    console.log(req.file);
    const { Headline, Article, Domain } = req.body;
    const HeaderImage = req.file.filename;
    
    if (!isValid({ Headline, Article, Domain, HeaderImage })) {
      return res.status(400).json({ error: true, message: "Fill all the required fields" });
    }

    const newStory = new Story({
      Headline,
      Article,
      Domain,
      HeaderImage,
    });

    await newStory.save();
    console.log(newStory);
    res.status(200).json({ error: false, message: "Done! Story added successfully" });
  } catch (error) {
    console.error(error.message);
    res.status(500).json({ error: true, message: "Error in adding story" });
  }
};

function isValid({ Headline, Article, Domain, HeaderImage }) {
  return Headline && Article && Domain && HeaderImage;
}

export const getStories = async (req, res) => {
  try {
    const stories = await Story.find();
    console.log(stories);
    return res.status(200).json({ message: stories });
  } catch (error) {
    console.error(error.message);
    return res.status(500).json({ error: true, message: "Error in fetching stories" });
  }
};
