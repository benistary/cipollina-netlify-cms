import { colors, styled } from "../../stitches.config";

const SVG = styled("svg", {
  marginBottom: "$contentSpacing",
});

type Logo = React.ComponentProps<typeof SVG>;

const Logo: React.FC<Logo> = ({ ...other }) => {
  return (
    <SVG
      xmlns="http://www.w3.org/2000/svg"
      fill="none"
      width="100%"
      viewBox="0 0 263 93"
      {...other}
    >
      <path
        fill={colors.black}
        d="M37.551 33.874c.877-.086 1.434-.215 1.673-.387 1.598-.617 2.397-1.613 2.397-2.987-.172-1.218-.696-1.828-1.572-1.828a4.07 4.07 0 0 0-1.081.129c-2.454.549-3.682 1.51-3.682 2.884 0 1.15.755 1.88 2.265 2.19ZM170.766 33.874c.877-.086 1.434-.215 1.674-.387 1.597-.617 2.395-1.613 2.395-2.987-.171-1.218-.695-1.828-1.571-1.828-.41 0-.771.043-1.082.129-2.454.549-3.681 1.51-3.681 2.884 0 1.15.754 1.88 2.265 2.19Z"
      />
      <path
        fill={colors.black}
        d="M238.33 37.313c0 .619-.359 1.803-1.082 3.554-2.523 5.238-5.004 7.855-7.442 7.855h-.515c-1.493-.446-2.239-1.536-2.239-3.27 0-1.064.403-2.18 1.21-3.347 2.042-3.658 4.866-5.451 8.471-5.381 1.065.05 1.597.043 1.597-.028v.617Zm-95.849-3.81c2.936-8.463 5.631-15.021 8.085-19.674 2.473-4.793 4.123-7.654 4.951-8.59.005.057.012.1.02.17 0 .96-.678 3.665-2.034 8.11-3.055 8.156-5.786 14.293-8.189 18.413-2.076 3.623-3.459 5.897-4.159 6.842-.012-.135-.031-.245-.064-.3a61.379 61.379 0 0 1 1.39-4.971Zm12.989-28.61h-.035c0-.149.014-.137.035 0Zm-37.757 32.13c2.641-7.616 5.069-13.52 7.278-17.707 2.226-4.315 3.71-6.89 4.454-7.732l.019.153c0 .866-.611 3.3-1.832 7.301-2.749 7.34-5.207 12.864-7.369 16.573-1.87 3.26-3.113 5.309-3.745 6.158-.01-.122-.026-.223-.057-.273a56.03 56.03 0 0 1 1.252-4.473Zm11.69-25.749h-.032c0-.134.012-.123.032 0ZM89.025 48.388h-.103c-.24 0-.619-.145-1.132-.438-1.425-.79-2.139-1.596-2.139-2.421 0-1.219.688-1.895 2.06-2.035 1.202 0 1.804.766 1.804 2.294-.274 1.732-.44 2.6-.49 2.6Zm-1.623 3.168c-1.733 2.42-3.46 3.631-5.175 3.631-.378 0-.66-.052-.85-.156-1.132-.48-1.699-1.465-1.699-2.96.138-1.133.206-1.726.206-1.778 1.007-2.643 1.757-4.081 2.257-4.32.557 1.796 1.54 3.146 2.97 4.038 1.562.772 2.343 1.183 2.343 1.236l-.052.309Zm-21.811-2.524c0 1.168-.419 2.619-1.261 4.35-.515.964-1.193 1.634-2.035 2.01-.378 0-.568-.23-.568-.695v-.515c0-.79.24-1.603.722-2.448 1.049-1.56 2.094-2.495 3.142-2.806v.104ZM51.789 63.454c0 2.747-.207 5.502-.617 8.265.052 0 .092-.039.124-.1l-.64 3.962c-1.253 6.025-2.422 9.906-3.504 11.64-.412.722-1.08 1.203-2.007 1.442-.412 0-.689-1.407-.826-4.223 0-2.437.37-5.202 1.109-8.292.824-4.533 2.197-9.631 4.12-15.298 1.253-4.77 1.847-7.158 1.777-7.158.308 1.05.464 4.06.464 9.04v.722Zm210-22.455c-.342 0-.875.085-1.595.255-3.76 3.606-7.194 5.41-10.301 5.41-3.245 0-5.51-1.502-6.798-4.509-.704-3.417-1.159-5.357-1.367-5.82-.806-1.767-2.22-2.66-4.247-2.677l-1.39-.051c-3.023.05-5.675 1.159-7.96 3.322-1.286 1.366-2.278 2.728-3.005 4.088-.496.3-.97.865-1.421 1.705-.449 2.043-2.191 4.86-5.229 8.447-3.16 3.227-6.361 4.841-9.607 4.841h-.101c-1.649 0-2.954-.463-3.916-1.39-.79-.171-1.991-2.917-3.603-8.24-.929-3.195-2.748-4.792-5.462-4.792h-.41c-2.388 0-4.654 1.28-6.8 3.84-1.576 2.074-2.696 3.5-3.382 4.306.465-2.006.893-3.686 1.288-5.05.674-.81 1.012-1.398 1.012-1.756v-.206c0-.77-.367-1.26-1.094-1.477a3.573 3.573 0 0 0-.682-.377c-.634 0-1.244.386-1.829 1.16-.052.147-.105.308-.158.456a57.95 57.95 0 0 1-3.036 3.121c-.891.483-1.424.938-1.595 1.367-5.683 5.117-10.103 7.673-13.262 7.673-1.15 0-1.725-.367-1.725-1.107 0-1.561.542-3.312 1.621-5.254.79-.72 1.622-2.4 2.499-5.048v-.72c0-.892-.541-1.45-1.623-1.673h-.182c-.754.034-1.131.104-1.131.207-.012 0-.059.073-.143.224-.543.167-1.155.664-1.839 1.5-1.221 1.306-3.349 3.324-6.388 6.052-3.451 1.889-6.078 2.884-7.88 2.988h-1.313c-1.529 0-3.014-.678-4.454-2.037-1.341-2.093-2.009-3.637-2.009-4.635v-.309c0-.824.471-1.716 1.416-2.678 4.96-7.519 8.317-13.408 10.069-17.665 4.497-10.798 6.746-18.027 6.746-21.683v-.103c0-1.339-.515-2.24-1.544-2.704h-.335c-1.374 0-2.62.644-3.735 1.931-.618 1.168-1.125 2.001-1.519 2.499-.138 0-1.219 1.717-3.245 5.15-2.731 4.652-5.28 10.455-7.648 17.408-1.133 2.369-1.7 3.88-1.7 4.532-1.716 4.137-2.576 8.205-2.576 12.207.024.244.059.511.101.786a6.603 6.603 0 0 0-.84.854c-1.095 1.173-3.011 2.99-5.746 5.448-3.106 1.698-5.471 2.595-7.092 2.687h-1.183c-1.375 0-2.713-.612-4.009-1.83-1.206-1.884-1.807-3.276-1.807-4.172v-.28c0-.74.423-1.545 1.273-2.41 4.466-6.767 7.487-12.066 9.064-15.899 4.047-9.718 6.071-16.223 6.071-19.514v-.093c0-1.205-.463-2.016-1.39-2.434h-.302c-1.236 0-2.356.58-3.361 1.74-.556 1.05-1.011 1.799-1.366 2.247-.124 0-1.097 1.545-2.921 4.635-2.456 4.188-4.751 9.41-6.883 15.668-1.021 2.132-1.532 3.492-1.532 4.08a31.127 31.127 0 0 0-1.798 5.873 6.95 6.95 0 0 0-1.125.58c-6.471 4.942-12.394 7.415-17.766 7.415h-1.546c-.327 0-.49-.104-.49-.308.276-1.15.412-2.206.412-3.167 0-.773-.154-1.545-.464-2.317-.858-2.044-2.67-3.066-5.433-3.066-1.016 0-2.258.252-3.722.753-.464-.282-1.115-.467-1.969-.546-3.76.204-6.704.524-8.833.953-2.49.944-3.784 1.416-3.888 1.416l-.489-.077c-2.387-2.215-5.194-3.323-8.422-3.323-1.39 0-2.754.258-4.094.772-.981.576-1.683.973-2.107 1.19a2.292 2.292 0 0 0-.777-.236H51.71c-1.51 1.732-2.92 3.218-4.223 4.453-.894.483-1.425.938-1.599 1.367-5.682 5.117-10.102 7.673-13.262 7.673-1.149 0-1.725-.367-1.725-1.107 0-1.561.541-3.312 1.624-5.254.79-.72 1.621-2.4 2.497-5.048v-.72c0-.892-.541-1.45-1.622-1.673h-.18c-.756.034-1.132.104-1.132.207-.015 0-.071.091-.166.264a3.664 3.664 0 0 0-1.098.56c-2.746 2.848-4.592 4.659-5.535 5.432-6.576 4.653-11.863 6.98-15.865 6.98-1.097-.07-1.898-.199-2.394-.387-2.593-.754-3.889-2.917-3.889-6.492v-.101c0-1.888.687-3.966 2.062-6.233 3.45-4.41 6.429-6.617 8.936-6.617.736 0 1.294.283 1.673.85.342 1.633.816 2.448 1.416 2.448h.617c.775-.534 1.16-1.194 1.16-1.985 0-2.266-1.606-3.648-4.815-4.145-1.617 0-3.324.584-5.126 1.75C3.022 37.014 0 41.83 0 47.821v.411c0 .586.078 1.255.233 2.01 1.528 4.79 4.514 7.185 8.96 7.185 3.59 0 7.47-1.16 11.64-3.478 3.017-1.555 5.49-3.124 7.437-4.703-.545 1.766-.818 3.165-.818 4.189 0 3.11 1.658 4.663 4.97 4.663 4.327 0 9.647-2.894 15.968-8.68.422-.295.81-.594 1.185-.9a38.08 38.08 0 0 1-.646 1.775c-.276 1.53-1.338 5.192-3.192 10.996-3.313 10.489-4.97 18.18-4.97 23.076 0 2.814.342 4.754 1.03 5.82.79 1.217 1.554 1.826 2.29 1.826 1.187 0 2.458-.436 3.813-1.311 1.51-.603 2.952-2.816 4.325-6.645a66.357 66.357 0 0 0 3.015-19.778c0-6.54-.241-12.35-.723-17.434 0-.104.06-.438.182-1.004.978-2.18 2.764-3.272 5.355-3.272h.104c.841 0 1.7.215 2.575.645 1.149.686 1.724 1.185 1.724 1.493v.362l-3.632 2.986c-2.042 2.421-3.063 4.566-3.063 6.439 0 2.386 1.433 3.769 4.301 4.146 3.382 0 5.742-2.791 7.082-8.37.121-2.662.232-3.992.335-3.992 3.005-1.649 6.205-2.473 9.604-2.473.288.014.56.025.827.036-2.248 2.399-3.375 5.124-3.375 8.18v.516c0 .565.043 1.099.129 1.596.893 2.662 2.506 3.99 4.84 3.99h.927c2.68 0 5.117-1.32 7.315-3.966.824-1.269 1.409-1.906 1.75-1.906.258 0 .618.036 1.082.104 6.662 0 12.945-1.957 18.852-5.871a42.47 42.47 0 0 0 1.552-1.057c-.007.266-.021.533-.021.8.062.647.192 1.428.395 2.34 1.544 5.115 4.634 7.672 9.27 7.672 3.461 0 6.915-1.243 10.36-3.73 2.308-1.904 4.033-3.458 5.186-4.664 1.848 4.668 5.101 7.01 9.77 7.01 3.843 0 7.68-1.383 11.51-4.148.772-.635 1.479-1.235 2.133-1.8-.612 1.926-.925 3.441-.925 4.53 0 3.11 1.658 4.663 4.972 4.663 4.322 0 9.641-2.89 15.95-8.667a200.021 200.021 0 0 0-2.121 8.433c.222 1.203.79 1.803 1.699 1.803h.206c.448 0 .986-.318 1.622-.953 4.223-6.009 6.832-9.579 7.829-10.713 1.647-2.178 3.235-3.27 4.763-3.27h.491c.377.034.729.224 1.056.567.273.447 1.166 2.996 2.678 7.648 1.528 4.138 4.444 6.206 8.755 6.206 1.476 0 3.451-.42 5.924-1.262 1.63-.291 3.826-1.793 6.592-4.507 1.366-1.558 2.527-3.051 3.491-4.483 1.187 1.976 2.795 2.965 4.827 2.965h.103c3.055 0 5.881-1.743 8.473-5.23 1.149-2.077 1.698-3.114 1.649-3.114l.204.129c2.042 4.17 5.365 6.258 9.965 6.258h.413c.411 0 .996-.036 1.752-.104 3.484-.893 6.334-2.308 8.548-4.248C262.167 44.37 263 43.34 263 42.464c0-.6-.403-1.09-1.211-1.465Z"
      />
      <path
        fill={colors.black}
        d="M71.406 80.733h2.233c.075 0 .13-.018.186-.036a.546.546 0 0 0 .368-.535v-7.439a.184.184 0 0 0-.183-.184h-2.604v8.194Zm3.545-8.01v7.439c0 .628-.498 1.126-1.126 1.126h-2.419v2.97h-.737V71.985h3.524c.426 0 .758.332.758.738ZM114.418 81.294h-.757V71.99h.757v9.303Zm0-10.447h-.757v-1.495h.757v1.495ZM156.671 72.54l-3.284 8.194h3.284v.554h-4.096v-.554l3.34-8.194h-2.972v-.555h3.728v.555ZM198.252 72.54l-3.285 8.194h3.285v.554h-4.097v-.554l3.341-8.194h-2.972v-.555h3.728v.555ZM239.676 76.083h-2.213c-.075 0-.13.019-.204.037a.561.561 0 0 0-.369.517v3.543c0 .24.166.443.369.517.074.018.129.036.204.036h2.213v-4.65Zm.757-2.971v8.176h-3.174a1.111 1.111 0 0 1-1.108-1.108v-3.543c0-.61.499-1.108 1.108-1.108h2.417v-2.417a.544.544 0 0 0-.369-.536c-.055-.017-.11-.036-.185-.036h-2.232v-.555h2.417c.628 0 1.126.499 1.126 1.127Z"
      />
    </SVG>
  );
};

export default Logo;
