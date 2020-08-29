import DataLoader from "dataloader";
import { Updoot } from "../entities/Updoot";

export const createUpdootLoader = () =>
  new DataLoader<{ postId: number; userId: number }, Updoot | null>(
    async (keys) => {
      const users = await Updoot.findByIds(keys as any);
      const updootIdsToUpdoot: Record<string, Updoot> = {};
      users.forEach((u) => {
        updootIdsToUpdoot[`${u.userId}|${u.postId}`] = u;
      });
      return keys.map(
        (key) => updootIdsToUpdoot[`${key.userId}|${key.postId}`]
      );
    }
  );
