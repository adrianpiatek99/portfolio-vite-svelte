<script lang="ts">
  import { onMount } from "svelte";

  import AboutMeSection from "lib/AboutMeSection.svelte";
  import ContactSection from "lib/ContactSection.svelte";
  import Footer from "lib/Footer.svelte";
  import Header from "lib/Header/Header.svelte";
  import ProjectsSection from "lib/ProjectsSection/ProjectsSection.svelte";
  import SkillsSection from "lib/SkillsSection.svelte";

  const observer = new IntersectionObserver((entries) => {
    entries.forEach((entry) => {
      if (entry.isIntersecting) {
        entry.target.classList.add("animate-show");
      } else {
        entry.target.classList.remove("animate-show");
      }
    });
  });

  onMount(() => {
    const animateElements = document.querySelectorAll(".animate-hidden");

    animateElements.forEach((el) => observer.observe(el));

    return () => {
      animateElements.forEach((el) => observer.unobserve(el));
    };
  });
</script>

<main class="relative flex flex-col">
  <Header />
  <div
    class="absolute inset-0 max-h-[67vh] bg-gradient-radial bg-[length:30px_30px] bg-[0_0,15px_15px] z-[-1px] after:content-[''] after:absolute after:left-0 after:right-0 after:bottom-0 after:h-[500px] after:bg-linear-gradient before:content-[''] before:absolute before:left-0 before:right-0 before:top-0 before:h-[50px] before:bg-gradient-to-b before:from-[#060606] before:to-[transparent]"
  />
  <div class="flex flex-col max-w-[1240px] w-full mx-auto p-[30px] z-1">
    <AboutMeSection />
    <SkillsSection />
    <ProjectsSection />
    <ContactSection />
  </div>
  <Footer />
</main>
