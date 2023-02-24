from django.db import models


class Etudiant(models.Model):
    nom = models.CharField(max_length=50)
    prenom = models.CharField(max_length=50)
    address = models.CharField(max_length=50)
    niveau = models.CharField(max_length=2)
    phone = models.CharField(max_length=15)
    parcours = models.CharField(max_length=4)
    matricule = models.CharField(max_length=11)
    date_de_creation = models.DateTimeField(auto_now=True)


class Entreprise(models.Model):
    nom = models.CharField(max_length=50)
    phone = models.CharField(max_length=15)
    addresse = models.CharField(max_length=20)
    date_de_creation = models.DateTimeField(auto_now=True)
    description = models.TextField(max_length=200)

class EmailEtudiant(models.Model):
    email = models.EmailField()
    etudiant = models.ForeignKey(Etudiant, on_delete=models.CASCADE, related_name='email')

class EmailEntreprise(models.Model):
    email = models.EmailField()
    entreprise = models.ForeignKey(Entreprise, on_delete=models.CASCADE, related_name='entro')


class Competences(models.Model):
    nom = models.CharField(max_length=50)
    etudiant = models.ForeignKey(Etudiant, on_delete=models.CASCADE, related_name='à')


class Password(models.Model):
    password = models.CharField(max_length=200)
    etudiant = models.ForeignKey(Etudiant, on_delete=models.CASCADE)


class PasswordEntreprise(models.Model):
    password = models.CharField(max_length=200)
    entreprise = models.ForeignKey(Entreprise, on_delete=models.CASCADE)


class Picture(models.Model):
    picture = models.FileField(upload_to='pictures')
    etudiant = models.ForeignKey(Etudiant, on_delete=models.CASCADE, related_name='picture')


class Badge(models.Model):
    name = models.CharField(max_length=8)
    level = models.IntegerField()
    etudiant = models.ForeignKey(Etudiant, on_delete=models.CASCADE, related_name='badge')


class Demande(models.Model):
    titre = models.CharField(max_length=50)
    date = models.DateField(auto_now=True)
    description = models.TextField(max_length=100)
    etudiant = models.ForeignKey(Etudiant, on_delete=models.CASCADE, related_name='demande')


class Offre(models.Model):
    titre = models.CharField(max_length=50)
    date = models.DateField(auto_now=True)
    description = models.TextField(max_length=100)
    entreprise = models.ForeignKey(Entreprise, on_delete=models.CASCADE, related_name='offre_de')


class Historystudent(models.Model):
    titre = models.CharField(max_length=50)
    description = models.TextField(max_length=100)
    date = models.DateField(auto_now=True)
    etudiant = models.ForeignKey(Etudiant, on_delete=models.CASCADE, related_name='historique')
    entreprise = models.ForeignKey(Entreprise, on_delete=models.CASCADE, related_name='dans_entreprise')
    badge = models.ForeignKey(Badge, on_delete=models.CASCADE, related_name='avec_badge')


class Avis(models.Model):
    titre = models.CharField(max_length=50)
    description = models.TextField(max_length=100)
    date = models.DateField(auto_now=True)
    etudiant = models.ForeignKey(Etudiant, on_delete=models.CASCADE, related_name='alternant')


class Alternance(models.Model):
    titre = models.CharField(max_length=50)
    description = models.TextField(max_length=100)
    date = models.DateField(auto_now=True)
    etudiant = models.ForeignKey(Etudiant, on_delete=models.CASCADE, related_name='de')
    entreprise = models.ForeignKey(Entreprise, on_delete=models.CASCADE, related_name='dansentreprise')


class Forum(models.Model):
    titre = models.CharField(max_length=50)
    contenu = models.TextField()
    date = models.DateField(auto_now=True)
    auteur = models.ForeignKey(Etudiant, on_delete=models.CASCADE, related_name='auteur')


class Commentaire(models.Model):
    forum = models.ForeignKey(Forum, on_delete=models.CASCADE, related_name='forum')
    date = models.DateField(auto_now=True)
    contenu = models.TextField()
    commentateur = models.ForeignKey(Etudiant, on_delete=models.CASCADE, related_name='forum')
