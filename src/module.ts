import { defineNuxtModule, addComponent, createResolver } from "@nuxt/kit";

// Module options TypeScript interface definition
export interface ModuleOptions {}

export default defineNuxtModule<ModuleOptions>({
  meta: {
    name: "nuxt-useless-blobs",
  },
  setup: () => {
    const { resolve } = createResolver(import.meta.url);

    addComponent({
      filePath: resolve("./runtime/components/UselessBlob.vue"),
      name: "UselessBlob",
    });
  },
});
