# happy-staff

## Backend

# 1 - Créer un serveur express avec une BDD SQL
# 2 - Créer les routes : Home / Dashboard / Profil / authentification
# 3 - Créer les models : User / Entreprise / Offres / Candidature / authentification
# 4 - Créer les controleurs :
  ## User :
  ### Créer une candidature
  ### Supprimer une candidature
  ### Voir sa candidature
  ### Modifier sa candidature

  ## Entreprise:
  ### Créer une offre
  ### Modifier une offre
  ### Voir une offre
  ### Supprimer une offre

  ## Authentification:
  ### Créer une authentification
  ### Récupérer le profil

## Schéma BDD

# Utilisateurs (Users)

# user_id (Primary Key)
# username
# email
# password
# created_at
# updated_at
# Entreprises (Companies)
#
# company_id (Primary Key)
# name
# description
# location
# website
# created_at
# updated_at
# Offres d'emploi (JobOffers)
#
# job_id (Primary Key)
# title
# description
# requirements
# location
# salary
# company_id (Foreign Key, References Companies)
# created_at
# updated_at
# Candidatures (Applications)
#
# application_id (Primary Key)
# user_id (Foreign Key, References Users)
# job_id (Foreign Key, References JobOffers)
# status
# applied_at
# Relations
# Users peut avoir plusieurs Applications.
# Companies peut avoir plusieurs JobOffers.
# JobOffers peut avoir plusieurs Applications.
# Applications relie Users et JobOffers (table de jonction).



## Frontend

# 1 - Créer un menu
# 2 - Créer le système d'authentification
# 3 - Selon le statut de la personne ça lui donne accès à du contenu ou non
# 4 - Créer une page profil
  ## 4.1 - Upload de la PP
  ## 4.2 - Upload du C.V
  ## 4.3 - Modification de son profil
# 5 - Création de la page des offres
  # 5.1 - Offres filtrées selon le statut du candidat (déjà renseigné dans le profil)
# 6 - Créer un dashboard pour les candidats et entreprises
  # 6.1 - Candidats => Voir les offres auquels ils ont postulés
  # 6.2 - Entreprises => Voir qui a postulé aux offres
# happy-staff
