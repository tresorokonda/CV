document.addEventListener('DOMContentLoaded', function() {
    // Données aléatoires pour le CV
    var resumeData = {
      "nom": "Jean Dupont",
      "titre": "Développeur Web",
      "experiences": [
        {"poste": "Développeur Web Junior", "societe": "Entreprise ABC", "annees": "2018 - 2020", "description": "Travaux de développement web frontend et backend."},
        {"poste": "Stagiaire Développeur Web", "societe": "Startup XYZ", "annees": "2017", "description": "Stage de développement web frontend et création d'interfaces utilisateur."},
      ],
      "formation": [
        {"diplome": "Baccalauréat en Informatique", "ecole": "Université ABC", "annee": "2017"},
        {"diplome": "DUT Informatique", "ecole": "Institut XYZ", "annee": "2015 - 2017"},
      ],
      "competences": [
        "HTML/CSS",
        "JavaScript",
        "React",
        "Node.js",
        "MongoDB",
      ]
    };
  
    // Générer les informations du CV
    var resumeSection = document.getElementById('resume');
    function generateResume() {
      var html = '<h2>' + resumeData.nom + '</h2>';
      html += '<p><strong>' + resumeData.titre + '</strong></p>';
  
      html += '<div class="resume-item">';
      html += '<h3>Expériences</h3>';
      resumeData.experiences.forEach(function(exp) {
        html += '<div>';
        html += '<h4>' + exp.poste + '</h4>';
        html += '<p><em>' + exp.societe + ' (' + exp.annees + ')</em></p>';
        html += '<p>' + exp.description + '</p>';
        html += '</div>';
      });
      html += '</div>';
  
      html += '<div class="resume-item">';
      html += '<h3>Formation</h3>';
      resumeData.formation.forEach(function(edu) {
        html += '<div>';
        html += '<h4>' + edu.diplome + '</h4>';
        html += '<p><em>' + edu.ecole + ' (' + edu.annee + ')</em></p>';
        html += '</div>';
      });
      html += '</div>';
  
      html += '<div class="resume-item">';
      html += '<h3>Compétences</h3>';
      html += '<ul>';
      resumeData.competences.forEach(function(skill) {
        html += '<li>' + skill + '</li>';
      });
      html += '</ul>';
      html += '</div>';
  
      resumeSection.innerHTML = html;
    }
  
    generateResume();
  });
  