from django.views.generic import TemplateView
from .models import Skill, Project
from .form import ContactForm
from django.core.mail import send_mail, BadHeaderError
from django.http import HttpResponse


class IndexView(TemplateView):
    """
    Display index
    post contact form
    """

    template_name = "website/index.html"

    def get_context_data(self, **kwargs):
        context = super().get_context_data(**kwargs)
        context["skills"] = Skill.objects.all()
        context["projects"] = Project.objects.all()
        context["contact_form"] = ContactForm()
        return context

    def post(self, request):
        form = ContactForm(request.POST)

        if form.is_valid():
            name_clean_data = request.POST.get("name")
            message_clean_data = request.POST.get("message")
            sender_clean_data = request.POST.get("email")
            subject = f"Message de {name_clean_data} depuis le Portfolio"
            message = f"{sender_clean_data} {message_clean_data}"
            recipients = ["romeo.nobime@mailo.com"]
            try:
                send_mail(
                    subject, message, sender_clean_data, recipients, fail_silently=True
                )
                return HttpResponse("Message correctly sent !")
            except BadHeaderError:
                return HttpResponse("invalid")
