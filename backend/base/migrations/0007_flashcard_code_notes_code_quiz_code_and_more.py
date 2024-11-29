# Generated by Django 5.1.1 on 2024-11-28 14:25

from django.db import migrations, models


class Migration(migrations.Migration):

    dependencies = [
        ('base', '0006_alter_flashcard_chapter_alter_notes_chapter_and_more'),
    ]

    operations = [
        migrations.AddField(
            model_name='flashcard',
            name='code',
            field=models.CharField(default='DEFAULT', max_length=10, unique=True),
        ),
        migrations.AddField(
            model_name='notes',
            name='code',
            field=models.CharField(default='DEFAULT', max_length=10, unique=True),
        ),
        migrations.AddField(
            model_name='quiz',
            name='code',
            field=models.CharField(default='DEFAULT', max_length=10, unique=True),
        ),
        migrations.AlterField(
            model_name='subject',
            name='code',
            field=models.CharField(default='DEFAULT', max_length=10, unique=True),
        ),
    ]