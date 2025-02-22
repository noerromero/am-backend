import { logger } from "../../../../../shared/loggin/logger";
import { AllComponmentFetcher } from "../../../../../src/Report/Review/Application/Fetcher/AllComponentFetcher";
import { MysqlComponentRepository } from "../../../../../src/Report/Review/Infrastructure/Persistence/Mysql/MysqlComponentRepository";

export const allComponentsFetchController = async (req: any, res: any) => {
    try {
        const fetcher = new AllComponmentFetcher(new MysqlComponentRepository());
        const response = await fetcher.run();
        if (!response.success) {
          return res.status(400).json(response);
        }
        return res.status(200).json(response);
      } catch (error: any) {
        const { request } = req;
        logger.log("error", `${error} stack: ${error.stack}` + request);
        return res
          .status(500)
          .json({ success: false, message: "Internal server error" });
      }
};