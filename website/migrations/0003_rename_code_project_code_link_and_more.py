# Generated by Django 4.1.7 on 2023-04-02 16:33

from django.db import migrations


class Migration(migrations.Migration):
    dependencies = [
        ("website", "0002_rename_projects_project_rename_skills_skill"),
    ]

    operations = [
        migrations.RenameField(
            model_name="project",
            old_name="code",
            new_name="code_link",
        ),
        migrations.RenameField(
            model_name="project",
            old_name="project",
            new_name="project_link",
        ),
        migrations.RenameField(
            model_name="project",
            old_name="skils",
            new_name="skills",
        ),
        migrations.RenameField(
            model_name="skill",
            old_name="years_of_experiences",
            new_name="years_of_experience",
        ),
    ]