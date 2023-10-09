import {
  createPreviewSubscriptionHook,
  createCurrentUserHook,
} from "next-sanity";
import createImageUrlBuilder from "@sanity/image-url";
import { config } from "./config";

// Helps generate Image url with only the asset data

export const urlFor = (source) => createImageUrlBuilder(config).image(source);

// Set up the live preview subscription hook

export const usePreviewSubscription = createPreviewSubscriptionHook(config);

//Helper function for using the current logged in user account

export const useCurrentUser = createCurrentUserHook(config);
