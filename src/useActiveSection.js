import { ref } from 'vue';

export const activeSection = ref("home");

export function useActiveSection(sectionsRefs) {
  const updateActiveSection = () => {
    const scrollPosition = window.scrollY + window.innerHeight / 2;

    const sections = [
      { ref: sectionsRefs.home?.value, id: "home" },
      { ref: sectionsRefs.skills?.value, id: "skills" },
      { ref: sectionsRefs.events?.value, id: "events" },
      { ref: sectionsRefs.about?.value, id: "about" },
      { ref: sectionsRefs.contact?.value, id: "contact" },
    ];

    for (let i = sections.length - 1; i >= 0; i--) {
      const section = sections[i];
      if (section.ref && section.ref.offsetTop <= scrollPosition) {
        activeSection.value = section.id;
        break;
      }
    }
  };

  return { updateActiveSection, activeSection };
}
