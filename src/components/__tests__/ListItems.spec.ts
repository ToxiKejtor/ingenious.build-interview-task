import { describe, it, expect } from "vitest";
import { mount } from "@vue/test-utils";
import ListItems from "@/components/ListItems.vue";

describe("ListItems.vue", () => {
  const items = ["Barycz", "Cienista", "Glinnik"];

  it("renders list items", () => {
    const wrapper = mount(ListItems, {
      props: { items, subtitle: "Subtitle" },
    });
    const listItems = wrapper.findAll('[data-testid="list-item"]');
    expect(listItems).toHaveLength(items.length);
    items.forEach((item, index) => {
      expect(listItems[index].text()).toBe(item);
    });
  });

  it("emits itemSelected event when an item is clicked", async () => {
    const wrapper = mount(ListItems, {
      props: { items, subtitle: "Subtitle" },
    });
    const listItem = wrapper.find('[data-testid="list-item"]');
    await listItem.trigger("click");
    expect(wrapper.emitted().itemSelected).toBeTruthy();
    expect(wrapper.emitted().itemSelected[0]).toEqual(["Barycz"]);
  });

  it("sorts items when sortable is true", async () => {
    const wrapper = mount(ListItems, {
      props: { items, subtitle: "Subtitle", sortable: true },
    });
    const sortButton = wrapper.find('[data-testid="sort"]');
    await sortButton.trigger("click");
    const listItems = wrapper.findAll('[data-testid="list-item"]');
    expect(listItems[0].text()).toBe("Glinnik");
    await sortButton.trigger("click");
    expect(listItems[0].text()).toBe("Barycz");
  });
});
