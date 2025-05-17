function typeHTML(html, container, delay = 20) {
  const temp = document.createElement("div");
  temp.innerHTML = html;

  const nodes = Array.from(temp.childNodes);
  let currentIndex = 0;

  function processNode() {
    if (currentIndex >= nodes.length) return;

    const node = nodes[currentIndex];

    if (node.nodeType === Node.TEXT_NODE) {
      let text = node.textContent;
      let i = 0;
      function typeChar() {
        if (i < text.length) {
          container.innerHTML += text[i];
          i++;
          setTimeout(typeChar, delay);
        } else {
          currentIndex++;
          processNode();
        }
      }
      typeChar();
    }

    else if (node.nodeType === Node.ELEMENT_NODE) {
      container.innerHTML += node.outerHTML;
      currentIndex++;
      processNode();
    }

    else {
      currentIndex++;
      processNode();
    }
  }

  processNode();
}



const input = document.getElementById("input");
const output = document.getElementById("output");



input.addEventListener("keydown", function (e) {
  if (e.key === "Enter") {
    const cmd = input.value.trim().toLowerCase();

    // Affiche la commande tapée
    output.innerHTML += `<br>@LOPESGONCALVES-Hugo/portfolio:$ ${cmd}`;

    // Si clear → on efface tout
    if (cmd === "clear") {
      output.innerHTML = "";
    }

//si help --> on affiche la liste des commandes
else if (cmd === "help") {
  const helpHtml = document.getElementById("help-response").innerHTML;
  typeHTML(helpHtml, output, 5); // 10ms par caractère
}

//si about, on affiche un texte à propos de moi
else if (cmd === "about") {
  const aboutHtml = document.getElementById("about-response").innerHTML;
  typeHTML(aboutHtml, output, 5); // 10ms par caractère
}

//si skills --> on affiche la liste de mes compétences
else if (cmd === "skills") {
  const skillsHtml = document.getElementById("skills-response").innerHTML;
  typeHTML(skillsHtml, output, 5); // 10ms par caractère
}

//si contact --> on affiche la liste de mes compétences
else if (cmd === "contact") {
  const contactHtml = document.getElementById("contact-response").innerHTML;
  typeHTML(contactHtml, output, 5); // 10ms par caractère
}

//si projects --> on affiche la liste de mes compétences
else if (cmd === "projects") {
  const projectsHtml = document.getElementById("projects-response").innerHTML;
  typeHTML(projectsHtml, output, 5); // 10ms par caractère
}

    // Sinon → on affiche une commande personnalisée ou un message d'erreur
    else {
    const response = "</br>Commande inconnue. Tape <span class='cmd-vert'>help</span> pour voir la liste des commandes.<br>";
    typeHTML(response, output, 5); // ← effet machine à écrire
    }


    // Vide l'input + scroll automatique vers le bas
    input.value = "";
    output.scrollTop = output.scrollHeight;
  }
});
