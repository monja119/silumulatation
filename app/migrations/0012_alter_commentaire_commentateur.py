# Generated by Django 4.1.1 on 2023-02-23 12:29

from django.db import migrations, models
import django.db.models.deletion


class Migration(migrations.Migration):

    dependencies = [
        ('app', '0011_commentaire_forum'),
    ]

    operations = [
        migrations.AlterField(
            model_name='commentaire',
            name='commentateur',
            field=models.ForeignKey(on_delete=django.db.models.deletion.CASCADE, related_name='commentaire', to='app.etudiant'),
        ),
    ]