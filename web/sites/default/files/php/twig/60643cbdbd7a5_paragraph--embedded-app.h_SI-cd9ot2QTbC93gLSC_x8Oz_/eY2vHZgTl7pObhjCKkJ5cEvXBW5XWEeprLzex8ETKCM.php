<?php

use Twig\Environment;
use Twig\Error\LoaderError;
use Twig\Error\RuntimeError;
use Twig\Extension\SandboxExtension;
use Twig\Markup;
use Twig\Sandbox\SecurityError;
use Twig\Sandbox\SecurityNotAllowedTagError;
use Twig\Sandbox\SecurityNotAllowedFilterError;
use Twig\Sandbox\SecurityNotAllowedFunctionError;
use Twig\Source;
use Twig\Template;

/* themes/my_theme/templates/components/paragraph--embedded-app.html.twig */
class __TwigTemplate_92f5d9ec4f6393e86c82c50fcafd32e08bda6c5c40a1793e8b1a0f973d344552 extends \Twig\Template
{
    private $source;
    private $macros = [];

    public function __construct(Environment $env)
    {
        parent::__construct($env);

        $this->source = $this->getSourceContext();

        $this->parent = false;

        $this->blocks = [
        ];
        $this->sandbox = $this->env->getExtension('\Twig\Extension\SandboxExtension');
        $this->checkSecurity();
    }

    protected function doDisplay(array $context, array $blocks = [])
    {
        $macros = $this->macros;
        // line 1
        $this->loadTemplate("themes/my_theme/templates/components/paragraph--embedded-app.html.twig", "themes/my_theme/templates/components/paragraph--embedded-app.html.twig", 1, "233643779")->display($context);
    }

    public function getTemplateName()
    {
        return "themes/my_theme/templates/components/paragraph--embedded-app.html.twig";
    }

    public function getDebugInfo()
    {
        return array (  39 => 1,);
    }

    public function getSourceContext()
    {
        return new Source("", "themes/my_theme/templates/components/paragraph--embedded-app.html.twig", "/app/web/themes/my_theme/templates/components/paragraph--embedded-app.html.twig");
    }
    
    public function checkSecurity()
    {
        static $tags = array("embed" => 1);
        static $filters = array();
        static $functions = array();

        try {
            $this->sandbox->checkSecurity(
                ['embed'],
                [],
                []
            );
        } catch (SecurityError $e) {
            $e->setSourceContext($this->source);

            if ($e instanceof SecurityNotAllowedTagError && isset($tags[$e->getTagName()])) {
                $e->setTemplateLine($tags[$e->getTagName()]);
            } elseif ($e instanceof SecurityNotAllowedFilterError && isset($filters[$e->getFilterName()])) {
                $e->setTemplateLine($filters[$e->getFilterName()]);
            } elseif ($e instanceof SecurityNotAllowedFunctionError && isset($functions[$e->getFunctionName()])) {
                $e->setTemplateLine($functions[$e->getFunctionName()]);
            }

            throw $e;
        }

    }
}


/* themes/my_theme/templates/components/paragraph--embedded-app.html.twig */
class __TwigTemplate_92f5d9ec4f6393e86c82c50fcafd32e08bda6c5c40a1793e8b1a0f973d344552___233643779 extends \Twig\Template
{
    private $source;
    private $macros = [];

    public function __construct(Environment $env)
    {
        parent::__construct($env);

        $this->source = $this->getSourceContext();

        $this->blocks = [
            'paragraph' => [$this, 'block_paragraph'],
            'content' => [$this, 'block_content'],
        ];
        $this->sandbox = $this->env->getExtension('\Twig\Extension\SandboxExtension');
        $this->checkSecurity();
    }

    protected function doGetParent(array $context)
    {
        return "paragraph.html.twig";
    }

    protected function doDisplay(array $context, array $blocks = [])
    {
        $macros = $this->macros;
        $this->parent = $this->loadTemplate("paragraph.html.twig", "themes/my_theme/templates/components/paragraph--embedded-app.html.twig", 1);
        $this->parent->display($context, array_merge($this->blocks, $blocks));
    }

    // line 2
    public function block_paragraph($context, array $blocks = [])
    {
        $macros = $this->macros;
        // line 3
        echo "  <div";
        echo $this->extensions['Drupal\Core\Template\TwigExtension']->escapeFilter($this->env, $this->sandbox->ensureToStringAllowed(twig_get_attribute($this->env, $this->source, ($context["attributes"] ?? null), "addClass", [0 => ($context["classes"] ?? null)], "method", false, false, true, 3), 3, $this->source), "html", null, true);
        echo ">
    ";
        // line 4
        $this->displayBlock('content', $context, $blocks);
        // line 9
        echo "  </div>
";
    }

    // line 4
    public function block_content($context, array $blocks = [])
    {
        $macros = $this->macros;
        // line 5
        echo "      <h2>";
        echo $this->extensions['Drupal\Core\Template\TwigExtension']->escapeFilter($this->env, $this->sandbox->ensureToStringAllowed(twig_get_attribute($this->env, $this->source, ($context["content"] ?? null), "field_title", [], "any", false, false, true, 5), 5, $this->source), "html", null, true);
        echo "</h2>
      ";
        // line 6
        echo $this->extensions['Drupal\Core\Template\TwigExtension']->escapeFilter($this->env, $this->extensions['Drupal\Core\Template\TwigExtension']->attachLibrary("my_app/my_app"), "html", null, true);
        echo "
      <div id=\"hotels-root\"></div>
    ";
    }

    public function getTemplateName()
    {
        return "themes/my_theme/templates/components/paragraph--embedded-app.html.twig";
    }

    public function isTraitable()
    {
        return false;
    }

    public function getDebugInfo()
    {
        return array (  145 => 6,  140 => 5,  136 => 4,  131 => 9,  129 => 4,  124 => 3,  120 => 2,  39 => 1,);
    }

    public function getSourceContext()
    {
        return new Source("", "themes/my_theme/templates/components/paragraph--embedded-app.html.twig", "/app/web/themes/my_theme/templates/components/paragraph--embedded-app.html.twig");
    }
    
    public function checkSecurity()
    {
        static $tags = array("block" => 4);
        static $filters = array("escape" => 3);
        static $functions = array("attach_library" => 6);

        try {
            $this->sandbox->checkSecurity(
                ['block'],
                ['escape'],
                ['attach_library']
            );
        } catch (SecurityError $e) {
            $e->setSourceContext($this->source);

            if ($e instanceof SecurityNotAllowedTagError && isset($tags[$e->getTagName()])) {
                $e->setTemplateLine($tags[$e->getTagName()]);
            } elseif ($e instanceof SecurityNotAllowedFilterError && isset($filters[$e->getFilterName()])) {
                $e->setTemplateLine($filters[$e->getFilterName()]);
            } elseif ($e instanceof SecurityNotAllowedFunctionError && isset($functions[$e->getFunctionName()])) {
                $e->setTemplateLine($functions[$e->getFunctionName()]);
            }

            throw $e;
        }

    }
}
