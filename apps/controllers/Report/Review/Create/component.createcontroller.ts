import { ComponentCreator } from "../../../../../src/Report/Review/Application/Creator/ComponentCreator";
import { MysqlComponentRepository } from "../../../../../src/Report/Review/Infrastructure/Persistence/Mysql/MysqlComponentRepository";
import { logger } from "../../../../../shared/loggin/logger";

export const createComponentController = async (req: any, res: any) => {
    try {
        const {
            id,
            tag,
            system,
            machine,
            tag2,
            machineImagePath
          } = req.body;
        
          const creator = new ComponentCreator(new MysqlComponentRepository());
          const response = await creator.run(id, tag, system, machine, tag2, machineImagePath);
          if (!response.success) {
            return res.status(400).json(response);
          }
          return res.status(201).json(response);
    } catch (error) {
        logger.log("error", `${error}`);
        return res
        .status(500)
        .json({ success: false, message: "Internal server error" });
    }
}